const { default: mongoose } = require('mongoose');

const getConnection = async () => {
    try {
        const url ='mongodb+srv://stefaniav:IUD1040744018@cluster0.idmiy7k.mongodb.net/test'

        await mongoose.connect(url);
        
        console.log('conexion exitosa');
    } catch (error) {
      console.log(error)
    }
}

module.exports= {
    getConnection,
}