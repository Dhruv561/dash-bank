import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Dhruv" };
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account transactions efficiently."
          />
        </div>
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={50.35}
        />
      </div>
    </section>
  );
};

export default Home;
