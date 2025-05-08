import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Import images directly
import image1 from '@site/static/img/gpu.png';
import image2 from '@site/static/img/free-up-space.png';
import image3 from '@site/static/img/no-windows.png';

type FeatureItem = {
  title: string;
  Image: string;
  description: ReactElement;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Why GPU-Passthrough ?',
    Image: image1,
    description: (
      <>
        It's more secure and you don't need to install an OS on your computer. Everything runs in the virtual machine.
      </>
    ),
  },
  {
    title: 'Free up space',
    Image: image2,
    description: (
      <>
        You don't want to install two operating systems on your computer because it takes up space.
      </>
    ),
  },
  {
    title: 'Fuck windows',
    Image: image3,
    description: (
      <>
        You hate Windows and some software on Windows is more stable than on GNU/Linux. (like DaVinci Resolve)
      </>
    ),
  },
];

function Feature({ title, Image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactElement {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}