import { Helmet } from "react-helmet-async";

interface PageHelmetProps {
  title: string;
  description?: string;
}

const APP_NAME = "On";

export default function PageHelmet({ title, description }: PageHelmetProps) {
  const fullTitle = `${title} | ${APP_NAME}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
