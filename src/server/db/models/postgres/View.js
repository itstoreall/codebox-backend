import DataType from 'sequelize';

export default sequelize => {
  const View = sequelize.define(
    'View',
    {
      id: {
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
      },
      title: {
        type: DataType.STRING,
        allowNull: false,
        field: 'title',
        unique: true,
      },
      path: {
        type: DataType.STRING,
        allowNull: false,
        field: 'path',
        unique: true,
      },
      timestamp: {
        type: DataType.STRING,
        allowNull: false,
        field: 'timestamp',
        unique: true,
      },
    },
    {
      tableName: 'view',
      timestamps: false,
    }
  );

  return View;
};
