import { Tabs } from '@mantine/core';
import DailyReportTabs from './_components/DailyReportTabs';

export default function Demo() {
  return (
    <div>
      <h1>
        Tình hình các project <b className="text-red-500">HÀNG NGÀY</b>
      </h1>
      <DailyReportTabs />
    </div>
  );
}