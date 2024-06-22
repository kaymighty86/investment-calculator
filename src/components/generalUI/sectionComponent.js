import styles from "./sectionComponent.module.css";

const SectionComponent = (Props) => {
    let classes = `${styles.sectionStyle} ${Props.className != undefined? Props.className : ""}`;

    return(
        <div className={classes}>
            {Props.children}
        </div>
    );
}

export default SectionComponent;