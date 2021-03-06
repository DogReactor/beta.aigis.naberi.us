import * as React from 'react';

const AbilityConfigTable = ({ configs, configMetas, style }: any) => (
  <div
    className="ant-table ant-table-bordered ant-table-middle"
    style={{ ...style }}
  >
    <div className="ant-table-content">
      <div className="ant-table-body">
        <table>
          <thead className="ant-table-thead">
            <tr>
              <th>类型</th>
              <th>p1</th>
              <th>p2</th>
              <th>p3</th>
              <th>p4</th>
              <th>cmd</th>
              <th>発動条件</th>
              <th>発動種別</th>
              <th>対象種別</th>
            </tr>
          </thead>
          <tbody className="ant-table-tbody">
            {configs.map((config: any, index: number) => {
              // no configs in unit page
              const description = configMetas
                ? configMetas.find((c: any) => c.ID === config._InfluenceType)
                : config;
              return (
                <tr key={index}>
                  <td>
                    {config._InfluenceType}
                    {description &&
                      description.Description &&
                      ` / ${description.Description}`}
                  </td>
                  <td>{config._Param1}</td>
                  <td>{config._Param2}</td>
                  <td>{config._Param3}</td>
                  <td>{config._Param4}</td>
                  <td>{config._Command}</td>
                  <td>{config._ActivateCommand}</td>
                  <td>{config._InvokeType}</td>
                  <td>{config._TargetType}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default AbilityConfigTable;
