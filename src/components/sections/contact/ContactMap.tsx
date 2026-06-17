export default function ContactMap() {
  return (
    <div className="w-full h-72 md:h-96">
      <iframe
        src="https://www.google.com/maps?q=Bhatar+Trade+Center,Bhatar,Surat,Gujarat+395017&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="SRSP Office Location"
      />
    </div>
  );
}
