import React from "react";
import { Row, Col } from "antd";

type ILayout = {
    Component: any
}
const LayoutPage:React.FC<ILayout> = ({Component}) => {
  return (
      <Row>
        <Col span={24}>
          <Component />
        </Col>
      </Row>
  );
};

export default LayoutPage;