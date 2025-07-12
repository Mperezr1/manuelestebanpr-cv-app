import React from 'react';

const ChartCard = ({ title, children }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-slate-700 mb-4">{title}</h3>
        {children}
    </div>
);

export default ChartCard;