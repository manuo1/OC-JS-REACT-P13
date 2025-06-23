import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";
import FeatureItem from "../components/homepage/FeatureItem.jsx";
import Hero from "../components/homepage/Hero.jsx";

import iconChat from "../assets/img/icon-chat.png";
import iconMoney from "../assets/img/icon-money.png";
import iconSecurity from "../assets/img/icon-security.png";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItem
            icon={iconChat}
            alt="Chat Icon"
            title="You are our #1 priority"
          >
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </FeatureItem>

          <FeatureItem
            icon={iconMoney}
            alt="Money Icon"
            title="More savings means higher rates"
          >
            The more you save with us, the higher your interest rate will be!
          </FeatureItem>

          <FeatureItem
            icon={iconSecurity}
            alt="Security Icon"
            title="Security you can trust"
          >
            We use top of the line encryption to make sure your data and money
            is always safe.
          </FeatureItem>
        </section>
      </main>
      <Footer />
    </>
  );
}
