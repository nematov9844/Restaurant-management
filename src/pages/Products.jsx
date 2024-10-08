import React, { useState, useEffect } from 'react';
import { Card, Button, Modal, Form, Input, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Option } = Select;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [form] = Form.useForm(); // Create form instance

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://66ffade74da5bd2375518372.mockapi.io/api/data');
      const data = await response.json();
      setProducts(data);
    };

    const fetchCategories = async () => {
      const response = await fetch('https://66ffade74da5bd2375518372.mockapi.io/api/categories'); // Update this URL as necessary
      const data = await response.json();
      setCategories(data);
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const showModal = (product) => {
    if (!product) {
      form.resetFields(); // Yangi mahsulot uchun formani tozalash
    }
  
    setCurrentProduct(product);
    setSelectedCategory(product ? product.category : null);
    setImageFile(product ? product.img : null);
  
    form.setFieldsValue({
      name: product ? product.name : '',
      price: product ? product.price : '',
      description: product ? product.desc : '', // Set description value
    });
  
    setIsModalVisible(true);
  };
  

  const handleOk = async (values) => {
    const productData = { ...values, category: selectedCategory, img: imageFile }; // Include selected image

    if (currentProduct) {
      // Edit existing product
      await fetch(`https://66ffade74da5bd2375518372.mockapi.io/api/data/${currentProduct.id}`, {
        method: 'PUT',
        body: JSON.stringify(productData),
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      // Add new product
      await fetch('https://66ffade74da5bd2375518372.mockapi.io/api/data', {
        method: 'POST',
        body: JSON.stringify(productData),
        headers: { 'Content-Type': 'application/json' },
      });
    }

    setIsModalVisible(false);
    setCurrentProduct(null);
    setSelectedCategory(null);
    setImageFile(null); // Reset image file

    // Refresh product list
    const response = await fetch('https://66ffade74da5bd2375518372.mockapi.io/api/data');
    const data = await response.json();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    await fetch(`https://66ffade74da5bd2375518372.mockapi.io/api/data/${id}`, {
      method: 'DELETE',
    });
    setProducts(products.filter(product => product.id !== id));
  };

  const handleUpload = ({ file }) => {
    if (file.size > 2 * 1024 * 1024) { // 2MB dan katta fayllarni qabul qilmaymiz
      alert('Fayl hajmi juda katta. Iltimos, kichikroq fayl yuklang!');
      return;
    }
  
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageFile(reader.result); // Faylni Base64 formatida o'qish
    };
    reader.readAsDataURL(file);
  };
  

  return (
    <div className="p-5 h-[90%] overflow-y-scroll">
      <Button 
        onClick={() => showModal(null)} 
        className="mb-4 bg-blue-500 text-white hover:bg-blue-600"
      >
        Yangi Mahsulot Qo'shish
      </Button>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {products.map(product => (
          <Card 
            className="border-black text-white"
            key={product.id}
            hoverable
            cover={<img alt={product.name} src={product.img} className='max-h-[150px] lg:max-h-[240px] lg:min-h-[240px] min-h-[150px] object-cover' />}
            actions={[
              <Button onClick={() => showModal(product)} className="mr-2">Tahrirla</Button>,
              <Button onClick={() => handleDelete(product.id)} danger>O'chirish</Button>,
            ]}
          >
            <Meta className='text-white' 
              title={product.name} 
              description={(
                <>
                  <p>Narx: {product.price} so'm</p>
                  <p className='text-gray-700 w-full h-[60px] overflow-y-scroll'>Tavsif: {product.desc}</p> {/* Show product description */}
                </>
              )}
            />
          </Card>
        ))}
      </div>
      <Modal
        title={currentProduct ? 'Mahsulotni Tahrirlash' : 'Yangi Mahsulot Qo\'shish'}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null} // Hide default footer
      >
        <Form
          form={form}
          initialValues={currentProduct} // Use form instance
          onFinish={handleOk}
          layout="vertical"
        >
          <Form.Item 
            name="name" 
            label="Mahsulot Nomi" 
            rules={[{ required: true, message: 'Iltimos, mahsulot nomini kiriting!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item 
            name="price" 
            label="Narx" 
            rules={[{ required: true, message: 'Iltimos, narxni kiriting!' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item 
            name="desc" 
            label="Tavsif" 
            rules={[{ required: true, message: 'Iltimos, mahsulot tavsifini kiriting!' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item 
            label="Kategoriya"
            rules={[{ required: true, message: 'Iltimos, kategoriyani tanlang!' }]}
          >
            <Select
              value={selectedCategory}
              onChange={setSelectedCategory}
              placeholder="Kategoriya tanlang"
            >
              {categories.map(category => (
                <Option key={category.id} value={category.name}>{category.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Rasm yuklash">
            <Upload
              accept="image/*"
              beforeUpload={() => false} // Prevent automatic upload
              onChange={handleUpload}
            >
              <Button icon={<UploadOutlined />}>Rasm yuklash</Button>
            </Upload>
            {imageFile && (
              <img src={imageFile} alt="Uploaded" className="mt-2 max-h-[200px]" />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-600">
              Saqlash
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Products;
