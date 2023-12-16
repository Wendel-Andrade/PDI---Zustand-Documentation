import { usePersonStore } from "../stores/usePersonStore";

export function ManagePerson() {
  const firstName = usePersonStore((state) => state.firstName);
  const updateFirstName = usePersonStore((state) => state.updateFirstName);

  const lastName = usePersonStore((state) => state.lastName);
  const updateLastName = usePersonStore((state) => state.updateLastName);

  return (
    <div className="manage-person-container">
      <label>
        First name
        <input
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>

      <label>
        Last name
        <input
          onChange={(e) => updateLastName(e.currentTarget.value)}
          value={lastName}
        />
      </label>

      <p>
        Hello{" "}
        <strong>
          {firstName} {lastName}!
        </strong>
      </p>
    </div>
  );
}
