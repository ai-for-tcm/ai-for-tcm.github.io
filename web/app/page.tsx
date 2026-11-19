import navigation from "../data/navigation.json";
import { ArrowRight } from "@carbon/icons-react";
import { ClickableTile, Tag, Theme } from "@carbon/react";

export default function Home() {
  return (
    <Theme theme="g10">
      <main className="page-shell">
        <div className="page-content">
          <header className="page-header">
            <div className="brand-lockup">
              <span className="brand-mark" aria-hidden="true">
                T
              </span>
              <span className="brand-name">AI FOR TCM</span>
            </div>
            <div className="heading-block">
              <p className="eyebrow">服务导航</p>
              <h1 id="page-title">院内制剂效期管理</h1>
              <p className="intro">选择下方服务，快速访问相关系统与资料。</p>
            </div>
          </header>

          <section className="services" aria-labelledby="services-title">
            <div className="section-heading">
              <h2 id="services-title">服务入口</h2>
              <p>院内制剂管理 · 相关资源</p>
            </div>
            <nav className="service-grid" aria-label="相关服务">
              {navigation.map((item, index) => (
                <ClickableTile
                  className={`service-tile service-tile--${index + 1}`}
                  key={item.url}
                  {...{
                    href: item.url,
                    rel: "noopener noreferrer",
                    target: "_blank",
                  }}
                >
                  <div className="tile-topline">
                    <Tag type="blue" size="sm">
                      服务 0{index + 1}
                    </Tag>
                  </div>
                  <div className="tile-illustration" aria-hidden="true">
                    <span className="tile-illustration-number">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="tile-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="tile-action">
                    <span>立即访问</span>
                    <ArrowRight size={20} aria-hidden="true" />
                  </div>
                </ClickableTile>
              ))}
            </nav>
          </section>
          <footer className="page-footer">中医药 · 智能化服务入口</footer>
        </div>
      </main>
    </Theme>
  );
}
