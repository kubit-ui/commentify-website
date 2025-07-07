import Image from "next/image";
import styles from "./ghostButton.module.css";

function GhostButton({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon?: string;
  onClick?: () => void;
}) {
  return (
    <button className={styles.ghostButton} onClick={onClick}>
      <span className={styles.label}>{label}</span>
      {icon && <Image src={icon} alt={"icon"} height={18} width={18} />}
    </button>
  );
}

export default GhostButton;
