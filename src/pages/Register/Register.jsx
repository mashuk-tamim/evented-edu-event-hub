import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";

const Register = () => {
  const auth = getAuth();
  const { signUp, googleSignIn } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photoUrl = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    console.log(name, photoUrl, email, password);

    signUp(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then((res) => {
            console.log("profile updated", res.user);
          })
          .catch((error) => {
            console.error("error", error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="min-h-screen my-12">
      <div className="w-3/4 md:w-3/5 lg:w-1/2 mx-auto bg-gray-600 rounded-xl p-10 space-y-5 border-green-400 border-2 shadow-xl">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-white">
          Please Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-3">
          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <button className="btn btn-success">Register</button>
          </div>
        </form>
        <p className="text-center text-white">
          Already have an account?{" "}
          <Link className="text-green-400 font-bold" to="/login">
            Login
          </Link>
        </p>
        <div className="w-4/5 mx-auto text-white">
          <div className="flex items-center w-4/5 mx-auto pb-5">
            <p className="border border-gray-400 w-1/2"></p>
            <p className="mx-2">Or</p>
            <p className="border border-gray-400 w-1/2"></p>
          </div>
          <div className="space-y-2">
            <div className="flex border border-gray-400 w-4/5 mx-auto rounded-full p-2 justify-between items-center">
              <img
                className="w-1/12"
                src="https://i.ibb.co/qyMrqyg/google.png"
              />
              <button
                onClick={handleGoogleSignUp}
                className="text-xs md:text-sm lg:text-base"
              >
                Continue with Google
              </button>
              <p></p>
            </div>
            <div className="flex border border-gray-400 w-4/5 mx-auto rounded-full p-2 justify-between">
              <img
                className="w-1/12"
                src="https://i.ibb.co/TbxB3zp/github.png"
              />
              <button className="text-xs md:text-sm lg:text-base">
                Continue with Github
              </button>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
