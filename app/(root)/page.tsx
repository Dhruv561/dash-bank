import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const loggedIn = {
    firstName: "Dhruv",
    lastName: "Verma",
    email: "dhruv@gmail.com",
  };
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
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 125.4 }, { currentBalance: 125.4 }]}
      />
    </section>
  );
};

export default Home;
