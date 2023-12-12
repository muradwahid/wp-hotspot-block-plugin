import './panelAlign.scss';
import { AiOutlineCaretDown } from 'react-icons/ai';
const PanelAlign = ({ label, icons, renderFunction, value }) => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p style={{ margin: '0' }}>{label}</p>
        <div
          style={{
            display: 'flex',
            border: '1px solid #ccc',
          }}
        >
          {icons &&
            icons.map((icon, i) => (
              <div
                key={i}
                onClick={() => renderFunction(i + 1)}
                className={`single-icon-admin-panel panelAlign ${
                  value === i + 1 ? 'isActive' : ''
                }`}
              >
                {icon.value}
                <div className="icon-picker-tooltip-container">
                  <div
                    style={{ padding: '2px 6px' }}
                    className="icon-picker-tooltip"
                  >
                    <span>{icon.label}</span>
                    <AiOutlineCaretDown />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PanelAlign;
