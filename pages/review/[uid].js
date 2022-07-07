import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/dashboard/Layout";

import Review from "../../components/dashboard/Review";

const ReviewApplication = () => {
  const router = useRouter();
  const { uid } = router.query;
  return (
    <Layout>
      <Review uid={uid} />
    </Layout>
  );
};

export default ReviewApplication;
