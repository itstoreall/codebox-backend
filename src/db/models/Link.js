import DataType from 'sequelize';

export default sequelize => {
  return sequelize.define(
    'Link',
    {
      id: {
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
      },
      href: {
        type: DataType.STRING,
        allowNull: false,
        field: 'href',
      },
      anchor: {
        type: DataType.STRING,
        allowNull: false,
        field: 'anchor',
      },
      source: {
        type: DataType.STRING,
        allowNull: false,
        field: 'source',
      },
      timestamp: {
        type: DataType.STRING,
        allowNull: false,
        field: 'timestamp',
        unique: true,
      },
    },
    {
      tableName: 'link',
      timestamps: false,
    }
  );
};
