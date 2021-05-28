import React, { useState } from "react";
import axios from "axios";
import TutorSlots from "../../components/Slots/TutorSlots";

export default function TutorSlotPage() {
  return (
    <div>
      <h1>TutorSlotPage</h1>
      <TutorSlots />
    </div>
  );
}
