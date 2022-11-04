import mongoose from 'mongoose';

mongoose
  .connect('mongodb+srv://DaviWeb:30012001@bancoweb.eoc8qh7.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log("Banco de dados funcionando!!!");
  })
  .catch((err) => {
    console.log(err);
  })

export default mongoose;