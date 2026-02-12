import { Link } from 'react-router-dom';

const SmartLink = ({ href, children, className, onClick }) => {
  if (!href) return <span className={className}>{children}</span>;
  
  const isInternal = href.startsWith('/') || href.startsWith('#');
  
  if (isInternal) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default SmartLink;
