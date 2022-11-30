import { useState } from "react";
import { Card } from "../CardItem/Card";
import styles from './Catalog.module.css'

export const Catalog = () => {
  const [BututtonToMainVisible, setBututtonToMainVisible] = useState(false);
  return (
  <section className={styles._}>
    <div className={styles.container}>
      <Card itemTitle='Первый букет цветов' itemContent='Роза, роза голубая, ветка подорожника, сухое сено' itemPrice='1000$'/>
      <Card itemTitle='Первый букет цветов' itemContent='Роза, роза голубая, ветка подорожника, сухое сено' itemPrice='1000$'/>
      <Card itemTitle='Первый букет цветов' itemContent='Роза, роза голубая, ветка подорожника, сухое сено' itemPrice='1000$'/>
      <Card itemTitle='Первый букет цветов' itemContent='Роза, роза голубая, ветка подорожника, сухое сено' itemPrice='1000$'/>
      <Card itemTitle='Первый букет цветов' itemContent='Роза, роза голубая, ветка подорожника, сухое сено' itemPrice='1000$'/>
      <Card itemTitle='Первый букет цветов' itemContent='Роза, роза голубая, ветка подорожника, сухое сено' itemPrice='1000$'/>
    </div>
  </section>
)};