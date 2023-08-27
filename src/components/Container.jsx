const Container = ({ children, className = "" }) => {
  return (
    <section className={`w-full m-auto container ${className}`}>
      {children}
    </section>
  );
};

export default Container;
