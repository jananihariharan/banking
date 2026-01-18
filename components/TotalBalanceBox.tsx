'use client'

import AnimatedCounter from "./ui/AnimatedCounter";
import DoughnutChart from "./ui/DoughnutChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">{/** Doughnut chart */}</div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current balance</p>
          <div className="total-balance-amount flex-center gap-2 h-[100px]">
            <DoughnutChart accounts={accounts} />
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
