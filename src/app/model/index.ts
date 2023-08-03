interface Jobs {
  createdAt: Date;
  title: string;
  avatar: string;
  address: string;
  status: boolean;
  jobDesc: string;
  salary: number;
  working: string;
  companyType: string;
  jobLevel: string;
  id: string;
}

interface LoginInfo {
    username: string;
    password: string;
}

export { Jobs, LoginInfo };
