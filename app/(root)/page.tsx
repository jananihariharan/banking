import TotalBalanceBox from "@/components/TotalBalanceBox";
import HeaderBox from "@/components/ui/HeaderBox";

const Home = () => {
  const loggedIn = { firstName: "Harry" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName}
            subtext="Manage and track your expenses and loans efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
