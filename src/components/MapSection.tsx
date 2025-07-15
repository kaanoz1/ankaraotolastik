"use client";

export default function MapSection() {
  return (
    <section className="w-full h-[400px]">
      <iframe
        title="google-maps"
        src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d96210.7424360594!2d28.86645666044923!3d41.09989791763953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d40.9925727!2d28.9275681!4m3!3m2!1d41.1018383!2d28.8839661!5e0!3m2!1sen!2str!4v1752498645078!5m2!1sen!2str"
        width="600"
        height="450"
        loading="lazy"
        className="w-full h-full border-0"
        allowFullScreen
      ></iframe>
    </section>
  );
}
