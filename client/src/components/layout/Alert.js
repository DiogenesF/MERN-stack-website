import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Alert = ({ alert: { alerts } }) => {
  return (
    <>
      {alerts ? (
        <>
          {alerts.map((each) => (
            <div key={each.id} className={`alert alert-${each.alertType}`}>
              {each.msg}
            </div>
          ))}
        </>
      ) : (
        ""
      )}
    </>
  );
};

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
