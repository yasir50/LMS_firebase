import { Table } from "antd";

const TableList = ({ dataSource, defaultColumns }) => {
  return (
    <>
      <Table dataSource={dataSource} columns={defaultColumns} />
    </>
  );
};
export default TableList;
