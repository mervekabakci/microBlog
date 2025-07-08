import { Link } from "react-router-dom";

export default function Card({ postList }) {
  return (
    <div className="cards half">
      {postList.map((post) => (
        <div key={post.id} className="card">
          <Link to={`/blog/${post.id}`} className="card-body">
            <div className="card-content">
              <h2 className="card-title">{post.title}</h2>
              <p className="card-description">{post.brief}</p>
              <span className="moreButton">Devamı</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
