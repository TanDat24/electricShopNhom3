const SpecificationsTab = ({ specifications }) => {
    return (
        <div className="technical-specifications">
            <h2>Thông Số Kỹ Thuật</h2>
            <div className="specs-table">
                {Object.entries(specifications).map(([key, value]) => (
                    <div key={key} className="spec-row">
                        <div className="spec-name">{key}</div>
                        <div className="spec-value">{value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecificationsTab;
