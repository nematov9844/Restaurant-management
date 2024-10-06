

    const getData = async (path) => await fetch(`https://restouran-menegment-data.vercel.app/${path}`).then((res) => res.json());


 export default getData