import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaHelmet = (schema) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
            ${JSON.stringify(schema)}
        `}
    </script>
    </Helmet>
  );
};

export default SchemaHelmet;