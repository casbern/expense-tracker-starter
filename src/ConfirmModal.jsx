function ConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>Are you sure you want to delete this transaction?</p>
        <div className="modal-actions">
          <button onClick={onCancel}>Cancel</button>
          <button className="delete-btn" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
