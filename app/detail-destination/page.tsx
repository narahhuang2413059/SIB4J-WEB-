import  JSX  from "react/jsx-dev-runtime";
import CardScheduleDestination from "./_components/cardscheduledestination";

export default function DetailDestinationPage() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen flex items-center justify-center">

      <div className="flex-col gap-4">
        
        <CardScheduleDestination
          day="Kamis"
          date="16 Mei 2026"
          price="1.602.020"
          active
        />
      
      </div>

      <div className="flex-col gap-4">

        <CardScheduleDestination
          day="Jum"
          date="17 Mei 2026"
          price="2.337.000"
        />

      </div>

      <div className="flex-col gap-4">

        <CardScheduleDestination
          day="Sab"
          date="18 Mei 2026"
          price="2.340.000"
        />

      </div>

      <div className="flex-col gap-4">

        <CardScheduleDestination
          day="Ming"
          date="19 Mei 2026"
          price="2.370.808"
        />

      </div>

  

    </div>
  );
}