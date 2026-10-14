import { Link } from "react-router-dom";

export default function EquipmentCard({ item }) {
  return (
    <li className="equipment-card">
      <Link to={`/equipment/${item.id}`} className="text-link">
        <div className="card-top">
          <h3>{item.name}</h3>
          <span className="badge">{item.category}</span>
        </div>
        <p className="muted">Location: {item.location}</p>
        <p className="muted">Condition: {item.condition}</p>
        <p className="status">
          <span className={item.available ? "available" : ""}>
            {item.available ? "Available" : "In use"}
          </span>
        </p>
      </Link>
    </li>
  );
}
