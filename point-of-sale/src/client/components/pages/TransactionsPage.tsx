import { useRouter } from 'next/router';
import { FC } from 'react';
import { BackButton } from '../buttons/BackButton';
import { PoweredBy } from '../sections/PoweredBy';
import { Transactions } from '../sections/Transactions';
import css from './TransactionsPage.module.css';

export const TransactionsPage: FC = () => {
    const router = useRouter();

    return (
        <div className={css.root}>
            <div className={css.header}>
                <BackButton onClick={router.back}>Back</BackButton>
            </div>
            <div className={css.main}>
                <Transactions />
            </div>
            <PoweredBy />
        </div>
    );
};
