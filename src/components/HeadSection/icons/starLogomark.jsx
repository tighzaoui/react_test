function StarLogomark({ width, height, color }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 0L40.6066 19.3934L60 30L40.6066 40.6066L30 60L19.3934 40.6066L0 30L19.3934 19.3934L30 0Z"
        fill={color}
      />
    </svg>
  );
}
export default StarLogomark;
