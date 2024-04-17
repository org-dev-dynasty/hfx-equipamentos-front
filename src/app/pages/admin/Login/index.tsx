import LoginImage from "../../../assets/loginImage1.png";
import Logo from "../../../assets/logoLogin.png";


export function SignIn() {
    return (
        <div className="flex justify-center items-center h-screen">
            <img
                src={LoginImage}
                alt="Imagem de Login"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

            <div className="z-10 bg-white bg-opacity-80 p-6 rounded-lg shadow-md w-2/5 max-md:w-4/5 max-sm:w-4/5">
                <img src={Logo} alt="Logo" className="w-56 mb-10 mx-auto" />
                <form className="flex flex-col items-center space-y-4">
                    <div className="w-full mb-4">
                        <label htmlFor="username" className="block mb-2 font-bold font-jost">Email:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Insira seu email"
                        />
                    </div>
                    <div className="w-full mb-10">
                        <label htmlFor="password" className="block mb-1 font-bold font-jost">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Insira sua senha"
                        />
                    </div>

                </form>
                <button
                    type="submit"
                    className="flex justify-center items-center w-4/5 bg-primary text-white py-2 rounded hover:bg-blue-600 transition duration-500 mt-8 mx-auto"
                >
                    Entrar
                </button>
            </div>
        </div>
    );
}
