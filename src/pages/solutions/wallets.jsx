import Link from "next/link";
import Layout from "@/components/solutions/layout";
import { useTranslation, Trans } from "next-i18next";
import HTMLHead from "@/components/HTMLHead";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import WalletsHero from "@/components/solutions/wallets/WalletsHero";
import WalletsExploreSolutions from "@/components/solutions/wallets/WalletsExploreSolutions";
import BasicCallout from "@/components/solutions/BasicCallout";
import LongformItem, {
  LongformSeeMoreItem,
} from "@/components/solutions/LongformItem";
import DeveloperResources, {
  DeveloperResourcesLink,
} from "@/components/solutions/DeveloperResources";
import FooterCallout from "@/components/solutions/FooterCallout";
import { GradientText, AnimatedText } from "@/components/shared/Text";
import { MotionSlideIn } from "@/components/shared/Motions";

import styles from "./Wallets.module.scss";

const Wallets = () => {
  const { t } = useTranslation();

  const complianceInABoxSeeMore = [
    <LongformSeeMoreItem key="transfer-hooks">
      <Trans i18nKey="solutions-wallets.compliance-in-a-box.see-more.transfer-hooks" />
    </LongformSeeMoreItem>,
    <LongformSeeMoreItem key="confidential-transfers">
      <Trans i18nKey="solutions-wallets.compliance-in-a-box.see-more.confidential-transfers" />
    </LongformSeeMoreItem>,
    <LongformSeeMoreItem key="freeze-seize">
      <Trans i18nKey="solutions-wallets.compliance-in-a-box.see-more.freeze-seize" />
    </LongformSeeMoreItem>,
  ];

  const oneClickCommerceSeeMore = [
    <LongformSeeMoreItem key="blockchain-links">
      <Trans
        i18nKey="solutions-wallets.one-click-commerce.see-more.blockchain-links"
        components={{
          nextLink: <Link href="/solutions/token-extensions" target="_blank" />,
        }}
      />
    </LongformSeeMoreItem>,
    <LongformSeeMoreItem key="solana-pay">
      <Trans
        i18nKey="solutions-wallets.one-click-commerce.see-more.solana-pay"
        components={{
          nextLink: <Link href="https://solanapay.com/" target="_blank" />,
        }}
      />
    </LongformSeeMoreItem>,
  ];

  const feelessTransactionsSeeMore = [
    <LongformSeeMoreItem key="octane">
      <Trans i18nKey="solutions-wallets.feeless-transactions.see-more.octane" />
    </LongformSeeMoreItem>,
  ];

  const unrivaledSecuritySeeMore = [
    <LongformSeeMoreItem key="exodus">
      <Trans
        i18nKey="solutions-wallets.unrivaled-security.see-more.exodus"
        components={{
          nextLink: (
            <Link href="https://passkeys.foundation/" target="_blank" />
          ),
        }}
      />
    </LongformSeeMoreItem>,
    <LongformSeeMoreItem key="dynamic">
      <Trans
        i18nKey="solutions-wallets.unrivaled-security.see-more.dynamic"
        components={{
          nextLink: <Link href="https://www.dynamic.xyz/" target="_blank" />,
        }}
      />
    </LongformSeeMoreItem>,
  ];

  const developerResourcesLinks = [
    <DeveloperResourcesLink
      title={t("solutions-wallets.developer-resources.links.guide.title")}
      link="https://solana.com/docs/intro/wallets"
      key="guide"
    />,
    <DeveloperResourcesLink
      title={t(
        "solutions-wallets.developer-resources.links.wallet-builder-kit.title",
      )}
      link="https://solanafoundation.notion.site/Wallet-Builder-s-Starter-Kit-615b61c2fe5d4109be71ec74a91e2034"
      key="wallet-builder-kit"
    />,
    <DeveloperResourcesLink
      title={t("solutions-wallets.developer-resources.links.helio.title")}
      link="https://github.com/kilogold/hellowallet"
      key="helio"
    />,
    <DeveloperResourcesLink
      title={t(
        "solutions-wallets.developer-resources.links.confidential-balances.title",
      )}
      link="https://github.com/kilogold/solana-rust-client/tree/kelvin"
      key="confidential-balances"
    />,
    <DeveloperResourcesLink
      title={t(
        "solutions-wallets.developer-resources.links.programmable-wallet.title",
      )}
      link="https://github.com/ZYJLiu/axum-solana-transfer"
      key="programmable-wallet"
    />,
  ];

  return (
    <Layout headerClassName={styles.Header}>
      <HTMLHead
        title={t("solutions-wallets.meta.title")}
        description={t("solutions-wallets.meta.description")}
      />

      <div className={styles.PageWrapper}>
        <WalletsHero />

        <div className={styles.WalletTypes}>
          <AnimatedText element="h2" as="heading">
            <Trans
              i18nKey="solutions-wallets.wallet-types.title"
              components={{
                gradient: (
                  <GradientText gradient="linear-gradient(270deg, #9945FF 0%, #EB54BC 50.57%, #FF754A 100%)" />
                ),
              }}
            />
          </AnimatedText>
        </div>

        <BasicCallout
          titleContent={
            <Trans
              i18nKey="solutions-wallets.callout-2.title"
              components={{
                gradient: (
                  <GradientText gradient="linear-gradient(270deg, #9945FF 0%, #EB54BC 50.57%, #FF754A 100%);" />
                ),
              }}
            />
          }
          subtitleKey="solutions-wallets.callout-2.subtitle"
          className={styles.BasicCallout}
        />

        <div className={styles.LongformSection}>
          <MotionSlideIn from="left">
            <LongformItem
              mediaComponent={<></>}
              mediaDesktopPlacement="right"
              titleComponent={t("solutions-wallets.compliance-in-a-box.title")}
              subtitleComponent={
                <Trans
                  i18nKey="solutions-wallets.compliance-in-a-box.subtitle"
                  components={{
                    nextLink: (
                      <Link
                        href="/solutions/token-extensions"
                        target="_blank"
                      />
                    ),
                  }}
                />
              }
              seeMoreTitle={t(
                "solutions-wallets.compliance-in-a-box.see-more.title",
              )}
              seeMoreItems={complianceInABoxSeeMore}
              className={styles.LongformItem1}
              mediaClassName={styles.LongformItemMedia}
            />
          </MotionSlideIn>

          <MotionSlideIn from="right">
            <LongformItem
              mediaComponent={<></>}
              mediaDesktopPlacement="left"
              titleComponent={
                <Link
                  href="https://solana.com/solutions/token-extensions"
                  target="_blank"
                >
                  {t("solutions-wallets.one-click-commerce.title")}
                </Link>
              }
              subtitleComponent={
                <Trans i18nKey="solutions-wallets.one-click-commerce.subtitle" />
              }
              seeMoreTitle={t(
                "solutions-wallets.one-click-commerce.see-more.title",
              )}
              seeMoreItems={oneClickCommerceSeeMore}
              className={styles.LongformItem2}
              mediaClassName={styles.LongformItemMedia}
            />
          </MotionSlideIn>

          <LongformItem
            mediaComponent={<></>}
            textContentDesktopDirection="row"
            mediaDesktopPlacement="below"
            titleComponent={t("solutions-wallets.feeless-transactions.title")}
            subtitleComponent={
              <Trans i18nKey="solutions-wallets.feeless-transactions.subtitle" />
            }
            seeMoreTitle={t(
              "solutions-wallets.feeless-transactions.see-more.title",
            )}
            seeMoreItems={feelessTransactionsSeeMore}
            className={styles.LongformItem3}
          />

          <MotionSlideIn from="left">
            <LongformItem
              mediaComponent={<></>}
              mediaDesktopPlacement="right"
              titleComponent={t("solutions-wallets.unrivaled-security.title")}
              subtitleComponent={
                <Trans i18nKey="solutions-wallets.unrivaled-security.subtitle" />
              }
              seeMoreTitle={t(
                "solutions-wallets.unrivaled-security.see-more.title",
              )}
              seeMoreItems={unrivaledSecuritySeeMore}
              className={styles.LongformItem4}
            />
          </MotionSlideIn>
        </div>

        <WalletsExploreSolutions styles={styles} />

        <DeveloperResources
          title={t("solutions-wallets.developer-resources.title")}
          subtitle={t("solutions-wallets.developer-resources.subtitle")}
          links={developerResourcesLinks}
          id="wallets-developer-resources"
        />

        <FooterCallout
          title={t("solutions-wallets.footer-callout.title")}
          text={t("solutions-wallets.footer-callout.text")}
          btnText={t("solutions-wallets.footer-callout.btn")}
          btnUrl="https://solana.org/grants-funding"
          btnLargeText={t("solutions-wallets.footer-callout.btn-large")}
          btnLargeUrl="wallets@solana.org"
          className={styles.FooterCallout}
          topSectionClassName={styles.FooterCalloutTopSection}
          buttonLargeClassName={styles.FooterCalloutButtonLarge}
        />
      </div>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Wallets;
