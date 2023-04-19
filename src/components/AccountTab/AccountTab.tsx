type Props = {
  logged?: boolean
  name?: string
  email?: string
  imgSrc?: string
};

const Image = ({ logged, imgSrc }: Pick<Props, 'logged' | 'imgSrc'>): JSX.Element => {
  if (logged) {
    return (
      <img
        alt="User"
        className="rounded-full w-10 h-10 mr-3"
        src={imgSrc}
      />
    );
  }

  return (
    <div className="h-10 w-10 rounded-full bg-ui-grey mr-3 flex justify-center items-center">?</div>
  );
};

const Text = ({ logged, name, email }: Pick<Props, 'logged' | 'name' | 'email'>): JSX.Element => {
  if (logged) {
    return (
      <>
        <div className="text-sm font-medium text-font-dark">
          {name}
        </div>
        <div className="text-sm text-font-light">
          {email}
        </div>
      </>
    );
  }

  return (
    <div className="text-sm font-medium text-font-dark">
      Unknown User
    </div>
  );
};

const AccountTab = ({
  logged = false, name, email, imgSrc,
}: Props): JSX.Element => (
  <button
    type="button"
    className="flex items-center justify-end w-60"
  >
    <Image
      logged={logged}
      imgSrc={imgSrc}
    />
    <Text
      logged={logged}
      name={name}
      email={email}
    />
  </button>
);

export default AccountTab;
