import React from 'react';
import {getRandomHexColor} from '../color';
import css from './statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>
            <ul className={css.statlist}>
                {stats.map(({id, label, percentage}) => (
                    <li className={css.item} key={id} style={{ backgroundColor: getRandomHexColor() }}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};
