/* eslint-disable react/prop-types */
import React from "react";

import Parameters from "metabase/parameters/components/Parameters/Parameters";

const MockNativeQueryEditor = ({
  location,
  query,
  setParameterValue,
  onChangeLocation,
}) => (
  <Parameters
    parameters={query.question().parameters()}
    location={location}
    setParameterValue={setParameterValue}
    onChangeLocation={onChangeLocation}
    syncQueryString
    isQB
    commitImmediately
  />
);
export default MockNativeQueryEditor;
