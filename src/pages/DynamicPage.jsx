import React from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { api } from '../services/api';
import SectionManager from '../components/SectionManager';
import LoadingSpinner from '../components/LoadingSpinner';

const DynamicPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  
  // Déterminer le slug à utiliser
  const pageSlug = slug || (location.pathname === '/' ? 'accueil' : location.pathname.slice(1));
  
  const { data: page, isLoading, error } = useQuery({
    queryKey: ['page', pageSlug],
    queryFn: () => api.getPage(pageSlug),
    retry: 1,
  });

  if (isLoading) {
    return <LoadingSpinner fullScreen />;
  }

  if (error || !page) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{page.title} | ImaginK</title>
        {page.meta_description && (
          <meta name="description" content={page.meta_description} />
        )}
      </Helmet>
      
      <div className="pt-20">
        <SectionManager sections={page.sections || []} />
      </div>
    </>
  );
};

export default DynamicPage;
