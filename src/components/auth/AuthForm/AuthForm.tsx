import type { ChangeEvent, FC } from 'react';
import type { ClientSafeProvider } from 'next-auth/react';

import { useMemo, useState } from 'react';
import { useMemoizedFn } from 'ahooks';

import styles from './AuthForm.module.css';

const enum CredentialsType {
  TEXT = 'text',
  EMAIL = 'email'
}

type AuthFormProps = {
  csrf: string;
  providers: ClientSafeProvider[];
};

export const AuthForm: FC<AuthFormProps> = ({ csrf, providers }) => {
  const [type, setType] = useState(CredentialsType.TEXT);

  const handleChange = useMemoizedFn((event: ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;

    if (target.value.includes('@')) {
      setType(CredentialsType.EMAIL);
    } else {
      setType(CredentialsType.TEXT);
    }
  });

  const inline = useMemo(() => {
    return providers.map((provider) => (
      <form
        key={provider.id}
        className={styles.inline}
        action={provider.signinUrl}
        method="POST"
      >
        <input
          type="hidden"
          name="csrfToken"
          value={csrf}
        />
        <button
          className={styles.button}
          type="submit"
        >
          Continue with {provider.name}
        </button>
      </form>
    ));
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <form
          action="/api/auth/signin/credentials"
          method="POST"
        >
          <input
            type="hidden"
            name="csrfToken"
            value={csrf}
          />
          <label className={styles.label}>
            <span>Login</span>
            <input
              className="select-search__input"
              type={type}
              inputMode={type}
              name="login"
              autoComplete="on"
              aria-autocomplete="both"
              minLength={3}
              placeholder="name or email"
              required={true}
              onChange={handleChange}
            />
          </label>
          <label className={styles.label}>
            <span>Password</span>
            <input
              className="select-search__input"
              type="password"
              name="password"
              autoComplete="on"
              aria-autocomplete="both"
              minLength={3}
              placeholder="password"
              required={true}
            />
          </label>
          <button
            className={styles.button}
            type="submit"
          >
            Sign in
          </button>
        </form>
        <div className={styles.separator} />
        {inline}
      </div>
    </div>
  );
};

