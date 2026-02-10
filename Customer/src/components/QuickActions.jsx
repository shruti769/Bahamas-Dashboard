"use client";

import ActionButton from "./ActionButton";

export default function QuickActions() {
  const actions = [
    {
      label: "Contact Vendor",
      onClick: () => console.log("Contact Vendor"),
    },
    {
      label: "Get Directions",
      onClick: () => console.log("Get Directions"),
    },
    {
      label: "View Ticket / QR Code",
      onClick: () => console.log("View QR Code"),
    },
  ];

  return (
    <div className="p-6 rounded-xl space-y-4">
      <h3 className="font-bold text-2xl mb-10">Quick Actions</h3>

      {actions.map((action, index) => (
        <ActionButton
          key={index}
          label={action.label}
          onClick={action.onClick}
        />
      ))}
    </div>
  );
}
