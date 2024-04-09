// Modelo de como será criado o usuário
import { mongoose } from "mongoose";

const UserSchema = new mongoose.UserSchema({
    id: {type: Number, require: true, unique: true},
    name: {type: String, require: true},
    email: {type: String, require: true},
    createdAt: {type: Date, require: true},
    checkIn: {type: Date, require: true}
})

export default mongoose.models.User || mongoose.model('User', UserSchema); // Se já tiver o modelo User, ele retorna esse modelo.
// Se não existir, ele cria um modelo novo.