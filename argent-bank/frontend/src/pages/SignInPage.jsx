import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";
import SignInForm from "../components/signin/SignInForm.jsx";

export default function SignInPage() {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <SignInForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
