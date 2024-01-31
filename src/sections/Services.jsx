/* eslint-disable no-unused-vars */
import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="flex flex-wrap justify-center max-container gap-9">
      {services.map((service) => (
        <ServiceCard key={service} {...service} />
      ))}
    </section>
  );
};

export default Services;
