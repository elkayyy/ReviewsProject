import './Info.css';

function Info({ label, label1, label2, value1, value2 }) {

    return (
        <div className="info-items">
            <span >{label}</span>
            <span> {label1} {value1}</span>
            <span> {label2} {value2}</span>
        </div>
    );
}

export default Info;